import { Button } from "@/components/ui/button"
import { CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { inputValueState, joinedState, roomCreatedState, roomIdState } from "@/store/atoms"
import { useRecoilState } from "recoil"
import Code from "./Code"

const JoinRoom = () => {
    const [roomCreated, setRoomCreated] = useRecoilState(roomCreatedState)
    const [_roomId, setRoomId] = useRecoilState(roomIdState)
    const [inputValue, setInputValue] = useRecoilState(inputValueState)
    const [_joined, setJoined] = useRecoilState(joinedState)



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
      setJoined(true)
    }
  return (
    <div>
        <CardHeader>
                <Button className='rounded-sm cursor-pointer py-5 font-bold' onClick={handleCreateRoom}>Create New Room</Button>
                </CardHeader>
                <CardFooter className="my-2">
                    <Input className='rounded-sm mr-2 font-semibold' placeholder='Enter Room Code' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                    <Button className='rounded-sm cursor-pointer font-semibold' disabled={!inputValue} onClick={handleJoin}>Join Room</Button>
                </CardFooter>
                {
                    roomCreated&&<Code/>
                }
    </div>
  )
}

export default JoinRoom