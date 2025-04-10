import { Button } from "@/components/ui/button"
import { CardContent, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { roomIdState } from "@/store/atoms"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

const Room = () => {
    const [roomId, _setRoomId] = useRecoilState(roomIdState)
    const [inputValue, setInputValue] = useState("")
    const [socket, setsocket] = useState<WebSocket|null>(null)
    useEffect(() => {
      const newsocket= new WebSocket("ws://localhost:8080")
      setsocket(newsocket)
      newsocket.onopen=()=>{
        console.log("connection established");
      }
      newsocket.onmessage=(e)=>{
        console.log("arnab : "+e.data);
      }
    }, [])
    const handleKeydown=(e:React.KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log(inputValue)
            socket?.send(inputValue)
            setInputValue('');
        }
      
    }
    const hadnleSend=()=>{
        socket?.send(inputValue)
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
                <div className=" w-full h-[500px] border rounded-sm mt-4"></div>
                <div className="my-2 flex justify-between mt-5">
                    <Textarea className='rounded-sm mr-2 font-semibold focus:border-0 overflow-scroll h-[37px] resize-none ' placeholder='Type a message...' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onKeyDown={handleKeydown}/>
                    <Button className='rounded-sm cursor-pointer font-semibold' disabled={!inputValue} onClick={hadnleSend}>Send</Button>
                </div>
        </CardContent>
    </div>
  )
}

export default Room