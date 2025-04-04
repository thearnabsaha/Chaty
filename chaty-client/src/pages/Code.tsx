import { Button } from '@/components/ui/button'
import { CardContent, CardDescription } from '@/components/ui/card'
import { copiedState, roomIdState } from '@/store/atoms'
import { BsCheck } from 'react-icons/bs'
import { MdOutlineContentCopy } from 'react-icons/md'
import { useRecoilState } from 'recoil'

const Code = () => {
    const [copied, setCopied] = useRecoilState(copiedState)
    const [roomId, _setRoomId] = useRecoilState(roomIdState)
    const handleCopy=()=>{
        navigator.clipboard.writeText(roomId)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }
  return (
    <div>
        <CardContent>
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
    </div>
  )
}

export default Code