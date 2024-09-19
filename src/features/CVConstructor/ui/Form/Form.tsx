import { FC } from "react";
import { useCVStore } from "../../model/hooks/useCVStore/useCVStore";
import { Input } from "@/shared/ui/input/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Form: FC = () => {
    const name = useCVStore((state) => state.name);
    const surname = useCVStore((state) => state.surname);
    const jobTitle = useCVStore((state) => state.jobTitle);
    const changeName = useCVStore((state) => state.changeName);
    const changeSurname = useCVStore((state) => state.changeSurname);
    const changeJobTitle = useCVStore((state) => state.changeJobTitle);

    return (<>
        <Card className={cn("h-full")}>
            <CardHeader></CardHeader>
            <CardContent>
                <ScrollArea>
                    <div className="flex flex-col py-1.5">
                        <Label htmlFor="name">Имя</Label>
                        <Input 
                            id="name"
                            placeholder="Имя кандидата"
                            value={name}
                            onChange={(e) => changeName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col py-1.5">
                        <Label htmlFor="surname">Фамилия</Label>
                        <Input 
                            id="surname"
                            placeholder="Фамилия кандидата"
                            value={surname} 
                            onChange={(e) => changeSurname(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col py-1.5">
                        <Label htmlFor="jobTitle">Должность</Label>
                        <Input 
                            id="jobTitle"
                            placeholder="Должность кандидата"
                            value={jobTitle}
                            onChange={(e) => changeJobTitle(e.target.value)}
                        />
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    </>)
}