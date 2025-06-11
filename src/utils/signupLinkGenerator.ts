// src/utils/signupLinkGenerator.ts

/**
 * Generates a URL with an encoded timestamp for signup links that expire after 24 hours
 * @param baseUrl The base URL of your application, e.g., "https://yourapp.com"
 * @returns The complete signup URL with encoded timestamp
 */
export const generateSignupLink = (baseUrl: string): string => {
  // Get current timestamp
  const currentTimestamp = new Date().toISOString();
  
  // Encode the timestamp using base64
  const encodedTimestamp = btoa(currentTimestamp);
  
  // Return the full signup URL
  return `${baseUrl}/signup/${encodedTimestamp}`;
};

/**
 * Validates if a signup link is still valid by checking date and time differences
 * Logic:
 * - If dates differ by more than 1 day → Invalid
 * - If dates are the same → Valid
 * - If dates differ by exactly 1 day → Check exact hours/minutes difference
 * 
 * @param encodedTimestamp The base64 encoded timestamp from the URL
 * @returns Boolean indicating if the link is still valid
 */
export const isSignupLinkValid = (encodedTimestamp: string): boolean => {
  try {
    // Decode the timestamp
    const decodedTimestamp = atob(encodedTimestamp);
    const linkCreationTime = new Date(decodedTimestamp);
    const currentTime = new Date();
    
    // Extract date parts
    const linkDate = new Date(
      linkCreationTime.getFullYear(),
      linkCreationTime.getMonth(),
      linkCreationTime.getDate()
    );
    
    const currentDate = new Date(
      currentTime.getFullYear(), 
      currentTime.getMonth(), 
      currentTime.getDate()
    );
    
    // Calculate difference in days between the dates
    const dayDiff = Math.floor((currentDate.getTime() - linkDate.getTime()) / (24 * 60 * 60 * 1000));
    
    // Debug logging
    console.log('Link creation date:', linkDate.toLocaleDateString());
    console.log('Current date:', currentDate.toLocaleDateString());
    console.log('Day difference:', dayDiff);
    
    // If more than 1 day has passed, the link is invalid
    if (dayDiff > 1) {
      console.log('Link expired: More than 1 day old');
      return false;
    }
    
    // If same day, the link is valid
    if (dayDiff === 0) {
      console.log('Link valid: Same day');
      return true;
    }
    
    // If exactly 1 day difference, we need to check the exact time
    // The link is valid if less than 24 hours have passed since creation
    const exactDiffMs = currentTime.getTime() - linkCreationTime.getTime();
    const exactDiffHours = exactDiffMs / (60 * 60 * 1000);
    
    console.log('Exact difference in hours:', exactDiffHours);
    console.log('Link valid?', exactDiffHours < 24);
    
    return exactDiffHours < 24;
    
  } catch (error) {
    console.error("Error validating signup link:", error);
    return false;
  }
};

/**
 * Gets the expiration time of a signup link (24 hours after creation)
 * @param encodedTimestamp The base64 encoded timestamp from the URL
 * @returns Date object representing when the link expires, or null if invalid
 */
export const getLinkExpiryTime = (encodedTimestamp: string): Date | null => {
  try {
    // Decode the timestamp
    const decodedTimestamp = atob(encodedTimestamp);
    const linkCreationTime = new Date(decodedTimestamp);
    
    // Calculate expiry time (creation time + 24 hours)
    const expiryTime = new Date(linkCreationTime);
    expiryTime.setHours(expiryTime.getHours() + 24);
    
    return expiryTime;
  } catch (error) {
    console.error("Error getting link expiry time:", error);
    return null;
  }
};

/**
 * Gets the remaining time before a link expires
 * @param encodedTimestamp The base64 encoded timestamp from the URL
 * @returns Object with hours, minutes, and seconds remaining, or null if invalid
 */
export const getRemainingTime = (encodedTimestamp: string): { hours: number; minutes: number; seconds: number } | null => {
  try {
    // Get expiry time
    const expiryTime = getLinkExpiryTime(encodedTimestamp);
    if (!expiryTime) return null;
    
    // Calculate remaining time
    const currentTime = new Date();
    const remainingMs = expiryTime.getTime() - currentTime.getTime();
    
    // If already expired
    if (remainingMs <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    
    // Calculate hours, minutes, seconds
    const seconds = Math.floor((remainingMs / 1000) % 60);
    const minutes = Math.floor((remainingMs / (1000 * 60)) % 60);
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    
    return { hours, minutes, seconds };
  } catch (error) {
    console.error("Error calculating remaining time:", error);
    return null;
  }
};