import '../index.css'

const June = ({ dayArray, date, month }) =>{
    // this is a damn shame
    let newItem =''

    const addItem =(event)=>{
        console.log(event.target.id)
        newItem = prompt('Item title')
        console.log(newItem)
    }
    // console.log('newItem', newItem)
    //
    // const days31 = ["January","March","May","July","August","October","December"]
    // const days30 = ["April","June","September","November"]
    

    // //months: 
    // // Jan, Mar, May, July, Aug, Oct, Dec = 31
    // // Apr, Jun, Sept, Nov = 30
    // // Feb = 28/29

    // const daysPerMonth = () => {
    //     if (days31.includes(month)) {
    //         console.log('31')
    //         // for (let i =1; i < 32; i++) {
    //         //     `<td>
    //         //         <div className='number'>${i}</div>
    //         //         <div id="${i}" className="body" onClick={addItem}></div>
    //         //     </td>`
    //         // }
    //     } else if (days30.includes(month)) {
    //         console.log('30')
    //         // for (let i =1; i < 31; i++) {
    //         //     `<td>
    //         //         <div className='number'>${i}</div>
    //         //         <div id="${i}" className="body" onClick={addItem}></div>
    //         //     </td>`
    //         // }
    //     } else {
    //         // not taking into account leap year
    //         console.log(28)
    //         // for (let i =1; i < 29; i++) {
    //         //     `<td>
    //         //         <div className='number'>${i}</div>
    //         //         <div id="${i}" className="body" onClick={addItem}></div>
    //         //     </td>`
    //         // }
    //     }
    // }


    return (
        <>
        <div style={{fontSize:'40px', color: 'white', padding: '10px'}}>June 2023</div>
        <table>
            <thead>
                <tr>
                {dayArray.map(weekday=><th>{weekday.slice(0,3)}</th>)}
                </tr>
            </thead>
            <tbody>
                    {/* {newItem.length !== 0 ? newItem : ''} */}
    {/* 1-3 */}
                <tr>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td>
                        {date === 1 && month ==="June" ? <div className = 'today number'>Jun 1</div> : <div className ='number'>Jun 1</div>}
                        <div id="Jun1" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 2 && month ==="June" ? <div className = 'today number'>2</div> : <div className ='number'>2</div>}
                        <div id="Jun2" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 3 && month ==="June" ? <div className = 'today number'>3</div> : <div className ='number'>3</div>}
                        <div id="Jun3" className="body" onClick={addItem}></div>
                    </td>
                </tr> 

    {/* 4-10 */}
                <tr>
                    <td>
                        {date === 4 && month ==="June" ? <div className = 'today number'>4</div> : <div className ='number'>4</div>}
                        <div id="Jun4" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 5 && month ==="June" ? <div className = 'today number'>5</div> : <div className ='number'>5</div>}
                        <div id="Jun5" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 6 && month ==="June" ? <div className = 'today number'>6</div> : <div className ='number'>6</div>}
                        <div id="Jun6" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 7 && month ==="June" ? <div className = 'today number'>7</div> : <div className ='number'>7</div>}
                        <div id="Jun7" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 8 && month ==="June" ? <div className = 'today number'>8</div> : <div className ='number'>8</div>}
                        <div id="Jun8" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 9 && month ==="June" ? <div className = 'today number'>9</div> : <div className ='number'>9</div>}
                        <div id="Jun9" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 10 && month ==="June" ? <div className = 'today number'>10</div> : <div className ='number'>10</div>}
                        <div id="Jun10" className="body" onClick={addItem}></div>
                    </td>
                </tr>

    {/* 11-17 */}
                <tr>
                    <td>
                        {date === 11 && month ==="June" ? <div className = 'today number'>11</div> : <div className ='number'>11</div>}
                        <div id="Jun11" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 12 && month ==="June" ? <div className = 'today number'>12</div> : <div className ='number'>12</div>}
                        <div id="Jun12" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 13 && month ==="June" ? <div className = 'today number'>13</div> : <div className ='number'>13</div>}
                        <div id="Jun13" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 14 && month ==="June" ? <div className = 'today number'>14</div> : <div className ='number'>14</div>}
                        <div id="Jun14" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 15 && month ==="June" ? <div className = 'today number'>15</div> : <div className ='number'>15</div>}
                        <div id="Jun15" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 16 && month ==="June" ? <div className = 'today number'>16</div> : <div className ='number'>16</div>}
                        <div id="Jun16" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 17 && month ==="June" ? <div className = 'today number'>17</div> : <div className ='number'>17</div>}
                        <div id="Jun17" className="body" onClick={addItem}></div>
                    </td>
                </tr>

    {/* 18-24 */}
                <tr>
                    <td>
                        {date === 18 && month ==="June" ? <div className = 'today number'>18</div> : <div className ='number'>18</div>}
                        <div id="Jun18" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 19 && month ==="June" ? <div className = 'today number'>19</div> : <div className ='number'>19</div>}
                        <div id="Jun19" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 20 && month ==="June" ? <div className = 'today number'>20</div> : <div className ='number'>20</div>}
                        <div id="Jun20" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 21 && month ==="June" ? <div className = 'today number'>21</div> : <div className ='number'>21</div>}
                        <div id="Jun21" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 22 && month ==="June" ? <div className = 'today number'>22</div> : <div className ='number'>22</div>}
                        <div id="Jun22" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 23 && month ==="June" ? <div className = 'today number'>23</div> : <div className ='number'>23</div>}
                        <div id="Jun23" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 24 && month ==="June" ? <div className = 'today number'>24</div> : <div className ='number'>24</div>}
                        <div id="Jun24" className="body" onClick={addItem}></div>
                    </td>
                </tr>

    {/* 25-30 */}
                <tr>
                    <td>
                        {date === 25 && month ==="June" ? <div className = 'today number'>25</div> : <div className ='number'>25</div>}
                        <div id="Jun25" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 26 && month ==="June" ? <div className = 'today number'>26</div> : <div className ='number'>26</div>}
                        <div id="Jun26" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 27 && month ==="June" ? <div className = 'today number'>27</div> : <div className ='number'>27</div>}
                        <div id="Jun27" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 28 && month ==="June" ? <div className = 'today number'>28</div> : <div className ='number'>28</div>}
                        <div id="Jun28" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 29 && month ==="June" ? <div className = 'today number'>29</div> : <div className ='number'>29</div>}
                        <div id="Jun29" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 30 && month ==="June" ? <div className = 'today number'>30</div> : <div className ='number'>30</div>}
                        <div id="Jun30" className="body" onClick={addItem}></div>
                    </td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}
export default June
