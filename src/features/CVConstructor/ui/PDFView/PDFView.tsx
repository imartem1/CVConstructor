import { FC } from "react";
import { useCVStore } from "../../model/hooks/useCVStore/useCVStore";
import { cn } from "@/lib/utils";

export const PDFView: FC = () => {
    const name = useCVStore((state) => state.name);
    const surname = useCVStore((state) => state.surname);
    const jobTitle = useCVStore((state) => state.jobTitle);
    return <div className={cn('aspect-A4 bg-white h-full')}><div><p>{`${name} ${surname}`}</p></div><div><p>{jobTitle}</p></div></div>
}