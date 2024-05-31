import { ChildrenProps } from "@/util/types";

export default function Wrapper({children} : ChildrenProps){
    return (
        <main className="wrapper">
            {children}
        </main>
    )
}