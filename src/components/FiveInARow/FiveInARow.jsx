import css from './FiveInARow.module.sass'
import {useEffect, useState} from "react";


const FiveInARow = (props) => {

////////////////////////////////
    let allCells = []


    for (let a = 0; a < 15; a++) {
        allCells.push([])
        for (let i = 0; i < 30; i++) {
            allCells[a].push(i + 1)
        }
    }

    let [markedCells, setMarkedCell] = useState([])

    const setMarked = (row, cell, sign) => {
        setMarkedCell([...markedCells, {row, cell, sign}])

    }


    const isMarked = (row, cell) => {
        let isMarked
        markedCells.forEach((marked) => {
            if (row === marked.row && cell === marked.cell) isMarked = marked.sign
        })
        return isMarked
    }


    let [sign, toggleSign] = useState('x')
    const setSing = () => {
        toggleSign(sign === 'x' ? 'o' : 'x')

    }
/////////////////////////////////////////ALGORITM//////////////////////////////////////


    useEffect(() => {
        checkForAWin()
    }, [sign])
    const checkForAWin = () => {
        let inHORIZONTALrow = [true]
        let inVERTICALLrow = [true]
        let inDiagonalleft = [true]
        let inDiagonalRight = [true]
        console.log(markedCells[markedCells.length - 1])

        ////////HORIZONTAL////////////////////////////////////////
        markedCells.map(({row, cell, sign}) => {
            // inHORIZONTALrow = [true]
            // inVERTICALLrow = [true]
            let lastPointHORIONTAL = markedCells[markedCells.length - 1].cell
            let lastPointVERTICAL = markedCells[markedCells.length - 1].row
            let lastPointSIGN = markedCells[markedCells.length - 1].sign
            // debugger
            if (lastPointVERTICAL === row && lastPointSIGN === sign) {
                if (lastPointHORIONTAL - 1 === cell || lastPointHORIONTAL + 1 === cell) {
                    inHORIZONTALrow.push(true)
                }
                if (lastPointHORIONTAL - 2 === cell || lastPointHORIONTAL + 2 === cell) {
                    inHORIZONTALrow.push(true)
                }
                if (lastPointHORIONTAL - 3 === cell || lastPointHORIONTAL + 3 === cell) {
                    inHORIZONTALrow.push(true)

                }
                if (lastPointHORIONTAL - 4 === cell || lastPointHORIONTAL + 4 === cell) {
                    inHORIZONTALrow.push(true)
                }
            }
            ////////VERTICAL////////////////////////////////////////////

            if (lastPointHORIONTAL === cell && lastPointSIGN === sign) {
                if (lastPointVERTICAL - 1 === row || lastPointVERTICAL + 1 === row) {
                    inVERTICALLrow.push(true)
                }
                if (lastPointVERTICAL - 2 === row || lastPointVERTICAL + 2 === row) {
                    inVERTICALLrow.push(true)
                }
                if (lastPointVERTICAL - 3 === row || lastPointVERTICAL + 3 === row) {
                    inVERTICALLrow.push(true)
                }
                if (lastPointVERTICAL - 4 === row || lastPointVERTICAL + 4 === row) {
                    inVERTICALLrow.push(true)
                }
            }
            ////////DIAGANAL LEFT////////////////////////////////////////////
            if (lastPointSIGN === sign) {
                if ((lastPointVERTICAL - 1 === row && lastPointHORIONTAL - 1 === cell) || (lastPointVERTICAL + 1 === row && lastPointHORIONTAL + 1 === cell)) {
                    inDiagonalleft.push(true)
                }
                if ((lastPointVERTICAL - 2 === row && lastPointHORIONTAL - 2 === cell) || (lastPointVERTICAL + 2 === row && lastPointHORIONTAL + 2 === cell)) {

                    inDiagonalleft.push(true)
                }
                if ((lastPointVERTICAL - 3 === row && lastPointHORIONTAL - 3 === cell) || (lastPointVERTICAL + 3 === row && lastPointHORIONTAL + 3 === cell)) {

                    inDiagonalleft.push(true)
                }
                if ((lastPointVERTICAL - 4 === row && lastPointHORIONTAL - 4 === cell) || (lastPointVERTICAL + 4 === row && lastPointHORIONTAL + 4 === cell)) {

                    inDiagonalleft.push(true)
                }
            }
            ////////DIAGANAL RIGHT////////////////////////////////////////////
            if (lastPointSIGN === sign) {
                if ((lastPointVERTICAL - 1 === row && lastPointHORIONTAL + 1 === cell) || (lastPointVERTICAL + 1 === row && lastPointHORIONTAL - 1 === cell)) {
                    inDiagonalleft.push(true)
                }
                if ((lastPointVERTICAL - 2 === row && lastPointHORIONTAL + 2 === cell) || (lastPointVERTICAL + 2 === row && lastPointHORIONTAL - 2 === cell)) {

                    inDiagonalleft.push(true)
                }
                if ((lastPointVERTICAL - 3 === row && lastPointHORIONTAL + 3 === cell) || (lastPointVERTICAL + 3 === row && lastPointHORIONTAL - 3 === cell)) {

                    inDiagonalleft.push(true)
                }
                if ((lastPointVERTICAL - 4 === row && lastPointHORIONTAL + 4 === cell) || (lastPointVERTICAL + 4 === row && lastPointHORIONTAL - 4 === cell)) {

                    inDiagonalleft.push(true)
                }
            }

        })
        // checkForAWin()

        let isWinHoriz = 0
        inHORIZONTALrow.map(el => {
            if (el === true) {
                isWinHoriz++
            } else {
                isWinHoriz = isWinHoriz * 0
                inHORIZONTALrow = [true]

            }
            if (isWinHoriz >= 5) setWin(true)
        })
        console.log('H---' + inHORIZONTALrow)


        let isWinVert = 0
        inVERTICALLrow.map(el => {
            if (el === true) {
                isWinVert++
            } else {
                isWinVert = isWinVert * 0
                inVERTICALLrow = [true]
            }
            if (isWinVert >= 5) setWin(true)
        })
        console.log('V---' + inVERTICALLrow)
        /////////


        let isWinDigLEFT = 0
        inDiagonalleft.map(el => {
            if (el === true) {
                isWinDigLEFT++
            } else {
                isWinDigLEFT = isWinDigLEFT * 0
                inDiagonalleft = [true]
            }
            if (isWinDigLEFT >= 5) setWin(true)
        })


        let isWinDigRIGHT = 0
        inDiagonalRight.map(el => {
            if (el === true) {
                isWinDigRIGHT++
            } else {
                isWinDigRIGHT = isWinDigRIGHT * 0
                inDiagonalRight = [true]
            }
            if (isWinDigRIGHT >= 5) setWin(true)
        })
    }


    let [win, setWin] = useState(false)


    const reset = () => {
        setWin(false)
        setMarkedCell([])
        toggleSign('x')
    }


    return <div className={css.FiveInARow}>
        {win &&
        <div className={css.win}>
            <div>
                <h1>
                    congratularions {sign === 'x' ? 'O' : 'X'} you've won!!!
                </h1>
                <button onClick={() => reset()}>start again</button>
            </div>
        </div>
        }
        <span className={css.turn}>Next turn is {sign} </span>
        <div className={css.container}>
            {
                allCells.map((row, id) => {
                    return <section key={id} row={row} className={css.row}>
                        {
                            row.map((cell) => {
                                return <span
                                    className={[css.cell, isMarked(id + 1, cell) ? css.marked : ''].join(' ')}
                                    key={cell}
                                    onClick={() => {
                                        setMarked(id + 1, cell, sign)
                                        setSing()
                                        // checkForAWin()
                                    }}
                                >{isMarked(id + 1, cell) ? isMarked(id + 1, cell) : ''}</span>

                            })
                        }
                    </section>
                })
            }
        </div>
    </div>
}
export default FiveInARow