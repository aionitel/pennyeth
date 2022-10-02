import React, { useState } from 'react'

const Send: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='0'
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
          spellCheck={false}
        />
      </div>
    </div>
  )
}

export default Send;