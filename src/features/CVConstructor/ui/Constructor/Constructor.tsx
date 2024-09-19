'use client';

import { cn } from "@/lib/utils";
import { Form } from "../Form/Form";
import { PDFView } from "../PDFView/PDFView";


export const Constructor = () => {
    return (
        <div className={cn('h-full flex flex-row')}>
            <div className={cn('flex-1 pl-5 py-5 pr-2.5')}>
                <Form />
            </div>
            <div className={cn('h-full pr-5 py-5 pl-2.5')}>
                <PDFView />
            </div>
        </div>
    );
}