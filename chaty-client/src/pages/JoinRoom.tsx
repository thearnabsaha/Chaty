import { Button } from "@/components/ui/button"
import { CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { inputValueState, joinedState, NameInputState, roomCreatedState, roomIdState } from "@/store/atoms"
import { useRecoilState } from "recoil"
import Code from "./Code"
import { useNavigate } from "react-router-dom"

const JoinRoom = () => {
  const [roomCreated, setRoomCreated] = useRecoilState(roomCreatedState)
  const [roomId, setRoomId] = useRecoilState(roomIdState)
  const [inputValue, setInputValue] = useRecoilState(inputValueState)
  const [nameinput, setNameinput] = useRecoilState(NameInputState)
  const [_joined, setJoined] = useRecoilState(joinedState)
  const navigate=useNavigate()
  const generateRoomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };
  const handleCreateRoom = () => {
    setRoomId(generateRoomCode())
    setRoomCreated(true)
  }
  const handleJoin = () => {
    setJoined(true)
    roomId?navigate(`/room/${roomId}`):navigate(`/room/${inputValue}`)
    setNameinput("")
    setInputValue("")
    setRoomCreated(false)
  }
  return (
    <div>
      <CardHeader>
        <Button className='rounded-sm cursor-pointer py-5 font-bold' onClick={handleCreateRoom}>Create New Room</Button>
      </CardHeader>
      <CardFooter className="my-2">
        <Input className='rounded-sm mr-2 font-semibold' placeholder='Enter Room Code' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Input className='rounded-sm mr-2 font-semibold' placeholder='Enter Your Name' value={nameinput} onChange={(e) => setNameinput(e.target.value)} />
        <Button className='rounded-sm cursor-pointer font-semibold' disabled={!inputValue || !nameinput} onClick={handleJoin}>Join Room</Button>
      </CardFooter>
      {
        roomCreated && <Code />
      }
    </div>
  )
}

export default JoinRoom