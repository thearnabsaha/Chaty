import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { roomIdState } from "@/store/atoms"
import { useState } from "react"
import { useRecoilState } from "recoil"

const Room = () => {
    const [roomId, _setRoomId] = useRecoilState(roomIdState)
    const [inputValue, setInputValue] = useState("")
    const handleKeydown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key=="Enter"){
            setInputValue("")
        }
    }
  return (
    <div>
        <CardContent>
            <div className="bg-accent rounded-sm py-2 px-4">
                <CardDescription className="flex justify-between">
                    <p className="text-shadow-accent-foreground ">Room Code : <span className=" font-semibold">{roomId}</span></p>
                    <p>Users : 3/5</p>
                </CardDescription>
                </div>
                <div className=" w-full h-[500px] border rounded-sm mt-2"></div>
                <div className="my-2 flex justify-between">
                    <Input className='rounded-sm mr-2 font-semibold focus:border-0' placeholder='Type a message...' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onKeyDown={handleKeydown}/>
                    <Button className='rounded-sm cursor-pointer font-semibold' disabled={!inputValue}>Send</Button>
                </div>
        </CardContent>
    </div>
  )
}

export default Room