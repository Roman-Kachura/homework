import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const dateEditing = (time:number) => {
        return time < 10 ? '0' + time : time;
    }

    const stringTime = !date ? '00:00:00' : dateEditing(date.getHours()) + ':' + dateEditing(date.getMinutes()) + ':' + dateEditing(date.getSeconds());
    const stringDate = !date ? 'Date' : date.getDate() + '.' + (dateEditing(date.getMonth() + 1)) + '.' + dateEditing(date.getFullYear());


    return (
        <div className={style.clock}>
            <div className={style.table}>
                <div className={style.tableWrapper}>
                    <div className={style.time}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {stringTime}
                    </div>

                    {show && date && (
                        <div className={style.date}>
                            {stringDate}
                        </div>
                    )}
                </div>
            </div>



            <div className={style.btnBlock}>
                <SuperButton className={style.btn + ' ' + style.startBtn} onClick={start}>
                    <div className={style.btnWrapper}>start</div>
                </SuperButton>
                <SuperButton className={style.btn + ' ' + style.stopBtn} onClick={stop}>
                    <div className={style.btnWrapper}>stopt</div>
                </SuperButton>
            </div>

        </div>
    )
}

export default Clock
