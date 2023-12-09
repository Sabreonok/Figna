import React from 'react'
import './aim.scss'

export default function Aim(props) {
    const [userScore, setUserScore] = useState('');
    return (
        <div className='aim_container'>
            <form>

                <div className='score'>
                    <input type="text" placeholder='Ваши баллы' value={userScore} onChange={(e) => setUserName(e.target.value)} />
                    <button type='button' onClick={() => {
                        props.addPost(userScore);
                        setUserScore('');

                    }}></button>
                </div>
        
            </form >
        </div >
    )
}

