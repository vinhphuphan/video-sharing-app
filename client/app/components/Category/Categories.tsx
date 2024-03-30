"use client";

import { usePathname, useSearchParams } from "next/navigation";
import TypeCard from "./TypeCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";
import { useEffect, useRef, useState } from "react";

interface CategoriesProps {
  categories: {
    id: number;
    label: string;
    icon: string;
  }[];
}

const translateAmount = 200;

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const params = useSearchParams();
  const videotype = params?.get("type");
  const pathName = usePathname();
  const [translate, setTranSlate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const container = entry.target;
        if (containerRef.current == null) return;
  
        setIsLeftVisible(translate > 0);
        setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
      });
    });
  
    observer.observe(containerRef.current);
  
    return () => {
      observer.disconnect();
    };
  }, [containerRef, translate]);
  
  
  

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((type) => (
          <TypeCard
            key={type.id}
            label={type.label}
            selected={videotype === type.label}
          />
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            onClick={() => {
              setTranSlate((translate) => {
                const newTranSlate = translate - translateAmount;
                if (newTranSlate <= 0) return 0;
                return newTranSlate;
              });
            }}
            variant="icon"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronLeft strokeWidth={1} />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="icon"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranSlate(translate => {
                if(containerRef.current == null) {
                  return translate
                }
                const newTranSlate = translate + translateAmount
                const edge = containerRef.current.scrollWidth
                const width = containerRef.current.clientWidth
                if (newTranSlate + width >= edge) {
                  return edge - width
                }
                return newTranSlate
              })
            }}
          >
            <ChevronRight strokeWidth={1} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Categories;
