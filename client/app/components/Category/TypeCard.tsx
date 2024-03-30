"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import qs from "query-string"

interface TypeCardProps {
    label :  string;
    selected? : boolean;
}

const TypeCard:React.FC<TypeCardProps> = ({ 
    label, 
    selected,
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            type : label
        }

        if (params?.get("type") === label) {
            delete updatedQuery.type;
        }

        const url = qs.stringifyUrl(
            {
                url : "/",
                query : updatedQuery
            },
            {skipNull : true}
        );
        router.push(url);
    }, [params, label, router])

    return ( 
        <div
            onClick={handleClick}
            className={`
            rounded-lg px-4 py-2
            cursor-pointer transition
            ${selected
            ? "bg-black text-white"
            : "bg-neutral-100 text-black hover:bg-neutral-300"
            }            
            `}
        >   
            <div className="text-sm font-normal">{label}</div>
        </div>
    );
}
 
export default TypeCard;