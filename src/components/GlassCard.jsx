
export default function GlassCard({Title, Alt_Title, Text, pos}){


return (

    <div   style={{ top: pos[0], bottom: pos[1], right:pos[2], left: pos[3]}}
            className = "flex flex-col w-[70%] md:absolute glassCard md:w-[300px]">
        <div className = "flex items-start">
            <p className = "mr-5 !font-extrabold text-left">{Title}</p>
            <p className = "!font-extralight text-left">{Alt_Title}</p>
        </div>
        <p className = "text-[15px]! text-left">{Text}</p>
    </div>
)


}