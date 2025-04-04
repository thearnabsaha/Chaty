import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BsChat, BsCheck } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
const CreateRoom = () => {
    const [copied, setCopied] = useState<Boolean>(false)
    const [roomCreated, setRoomCreated] = useState<Boolean>(false)
    const [roomId, setRoomId] = useState("0354EC9")
    const [inputValue, setInputValue] = useState("")
    const handleCopy=()=>{
        navigator.clipboard.writeText(roomId)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }
    const generateRoomCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
          code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
      };
    const handleCreateRoom=()=>{
        setRoomId(generateRoomCode())
        setRoomCreated(true)
    }
    const handleJoin=()=>{
        alert(inputValue)
    }
  return (
    <div className=' w-screen h-screen flex justify-center items-center font-mono'>
      <Card className='w-[600px]'>
        <CardContent>
            <div className="flex justify-between">
                <div className='flex items-center mb-2'>
                    <BsChat className='text-3xl mr-4'/>
                    <h1 className=' text-2xl font-bold'>Real Time Chat</h1>
                </div>
                <ModeToggle/>
            </div>
          <CardDescription>
            <p className='text-shadow-accent-foreground font-bold'>Temporary room that expires after both users exit</p>
          </CardDescription>
        </CardContent>
        <CardHeader>
          <Button className='rounded-sm cursor-pointer py-5 font-bold' onClick={handleCreateRoom}>Create New Room</Button>
        </CardHeader>
        <CardFooter>
            <Input className='rounded-sm mr-2 font-semibold' placeholder='Enter Room Code' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <Button className='rounded-sm cursor-pointer font-semibold' disabled={!inputValue} onClick={handleJoin}>Join Room</Button>
        </CardFooter>
        {
            roomCreated&&<CardContent>
            <div className="bg-accent py-10 rounded-sm">
                <CardDescription>
                    <p className="text-shadow-accent-foreground font-bold text-center mb-5">Share This Code With Your Friend</p>
                </CardDescription>
                <div className="flex justify-center">
                    <h1 className="text-center font-bold text-3xl mr-5">{roomId}</h1>
                    
                    <Button className=" rounded-sm cursor-pointer duration-500 h-10 w-10 -translate-y-0.5" onClick={handleCopy}>
                    {copied?<BsCheck className="text-3xl"/> 
                        :<MdOutlineContentCopy className="text-xl"/>}
                    </Button>
                </div>
            </div>
        </CardContent>
        }
      </Card>
    </div>
  )
}

export default CreateRoom