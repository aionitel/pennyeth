import React from 'react'
import { motion } from 'framer-motion';
import Transfer from './Transfer';
import ReactTooltip from 'react-tooltip';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../state/atoms';

const LoggedInHeader: React.FC = () => {
  const [user, setUser] = useRecoilState(userAtom);

  return (
    <motion.div>
      <div>
        <h1 className='text-center'><p className='text-green-400'>Wallet Connected</p>  {user.slice(0, 8)}...{user.slice(10, 18)}</h1>
        <div data-tip={(<div>this is a tip</div>)}>
          <img
            onClick={() => setUser("")}
            className='hover:cursor-pointer hover:opacity-[0.9]'
            width={35}
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fmateria-flat-arrows-symbols-vol-6%2F24%2F018_281_delete_close_stop-512.png&f=1&nofb=1&ipt=af34ca0592c50da70d4429a55ba1bf90075f26d96cc63453413f7cebbcb961e9&ipo=images' 
          />
        </div>
          <ReactTooltip place='right'>
            <h1>
              Disconnect wallet with PennyETH.
            </h1>
          </ReactTooltip>
      </div>
      <Transfer />
    </motion.div>
  )
}

export default LoggedInHeader;