import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Custom hook for Intersection Observer API
 * @param options - IntersectionObserver options
 * @returns [ref, inView] - Reference to attach to the element and boolean indicating if the element is in view
 */
export function useInView({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false
}: IntersectionObserverOptions = {}): [RefObject<any>, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const entryRef = useRef<IntersectionObserverEntry | null>(null);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    // Don't recreate the observer if the element is already in view and triggerOnce is true
    if (triggerOnce && inView) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        entryRef.current = entry;
        
        if (entry.isIntersecting) {
          setInView(true);
          
          // Unobserve if triggerOnce is true
          if (triggerOnce && node) {
            observer.unobserve(node);
          }
        } else {
          // Only set to false if not using triggerOnce
          if (!triggerOnce) {
            setInView(false);
          }
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(node);
    
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [root, rootMargin, threshold, triggerOnce, inView]);
  
  return [ref, inView];
}