import View1 from "../view/view1";
import View2 from "../view/view2";

export default function Layout(
    { children } : { children: React.ReactNode }
    )
{
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden scrollbar scrollbar-thumb-rose-500 ">
            <div className="flex-grow md:overflow-y-auto mr-[5%] ">
                <View1/>
            </div>
            <div className="w-full flex-none md:w-64">
                <View2/>
            </div>
        </div>
    )
}