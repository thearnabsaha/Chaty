import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import useWebSocket from "@/hooks/useWebsockets"
import { roomIdState } from "@/store/atoms"
import { useState } from "react"
import { useRecoilState } from "recoil"
const extractTime = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}.${minutes}`;
};
const Room = () => {
    const [roomId, _setRoomId] = useRecoilState(roomIdState)
    const [inputValue, setInputValue] = useState("")
    const { messages, sendMessage } = useWebSocket("ws://localhost:3001")
    const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log(inputValue)
            sendMessage(inputValue)
            setInputValue('');
        }
    }
    const handleSend = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(inputValue)
        sendMessage(inputValue)
        setInputValue('');
    }
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <Card className='w-[600px]'>
                <CardContent>
                    <div className="bg-accent rounded-sm py-2 px-4">
                        <CardDescription className="flex justify-between">
                            <p className="text-shadow-accent-foreground ">Room Code : <span className=" font-semibold">{roomId}</span></p>
                        </CardDescription>
                    </div>
                    <div className=" w-full h-[500px] border rounded-sm mt-4 overflow-auto pt-5">
                        {
                            messages.map((e, index) => {
                                console.log(extractTime(e.timestamps))
                                console.log(e.timestamps)
                                return (
                                    <div key={index} className={`flex mx-5 mb-5 ${e.from==="Server"?"justify-start":"justify-end"}`}>
                                        <Badge className={`flex flex-col bg max-w-72  ${e.from==="You"?" bg-amber-300":""}`}>
                                        {
                                            <div className="flex justify-between w-full min-w-20 mt-1">
                                                <p className="text-[10px]">{e.from}</p>
                                                {/* <p className="text-[10px]">{extractTime(e.timestamps)}</p> */}
                                                <p className="text-[10px]">{e.timestamps}</p>
                                            </div>
                                        }
                                            <p className="mb-1 h-auto break-all whitespace-normal">{e.msg}</p>
                                        </Badge>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="my-2 flex justify-between mt-5">
                        <Textarea className='rounded-sm mr-2 font-semibold focus:border-0 overflow-scroll h-[37px] resize-none ' placeholder='Type a message...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeydown} />
                        <Button className='rounded-sm cursor-pointer font-semibold' disabled={!inputValue} onClick={handleSend}>Send</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Room