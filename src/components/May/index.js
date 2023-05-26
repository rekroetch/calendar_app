import '../index.css'

const May = ({ dayArray, date, month }) =>{
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
        <div style={{fontSize:'40px', color: 'white', padding: '10px'}}>May 2023</div>
        <table>
            <thead>
                <tr>
                {dayArray.map(weekday=><th>{weekday.slice(0,3)}</th>)}
                </tr>
            </thead>
            <tbody>
                    {/* {newItem.length !== 0 ? newItem : ''} */}
    {/* 1-7 */}
                <tr>
                    <td>30</td>
                    <td>
                        {date === 1  && month ==='May' ? <div className = 'today number'>May 1</div> : <div className ='number'>May 1</div>}
                        <div id="May1" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 2  && month ==='May' ? <div className = 'today number'>2</div> : <div className ='number'>2</div>}
                        <div id="May2" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 3  && month ==='May' ? <div className = 'today number'>3</div> : <div className ='number'>3</div>}
                        <div id="May3" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 4  && month ==='May' ? <div className = 'today number'>4</div> : <div className ='number'>4</div>}
                        <div id="May4" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 5  && month ==='May' ? <div className = 'today number'>5</div> : <div className ='number'>5</div>}
                        <div id="May5" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 6  && month ==='May' ? <div className = 'today number'>6</div> : <div className ='number'>6</div>}
                        <div id="May6" className="body" onClick={addItem}></div>
                    </td>
                    
                </tr> 
    {/* 7-13 */}
                <tr>
                    <td>
                        {date === 7  && month ==='May' ? <div className = 'today number'>7</div> : <div className ='number'>7</div>}
                        <div id="May7" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 8  && month ==='May' ? <div className = 'today number'>8</div> : <div className ='number'>8</div>}
                        <div id="May8" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 9  && month ==='May' ? <div className = 'today number'>9</div> : <div className ='number'>9</div>}
                        <div id="May9" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 10 && month ==='May' ? <div className = 'today number'>10</div> : <div className ='number'>10</div>}
                        <div id="May10" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 11 && month ==='May' ? <div className = 'today number'>11</div> : <div className ='number'>11</div>}
                        <div id="May11" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 12 && month ==='May' ? <div className = 'today number'>12</div> : <div className ='number'>12</div>}
                        <div id="May12" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 13 && month ==='May' ? <div className = 'today number'>13</div> : <div className ='number'>13</div>}
                        <div id="May13" className="body" onClick={addItem}></div>
                    </td>
                </tr>
    {/* 14-20 */}
                <tr>
                    <td>
                        {date === 14 && month ==='May' ? <div className = 'today number'>14</div> : <div className ='number'>14</div>}
                        <div id="May14" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 15 && month ==='May' ? <div className = 'today number'>15</div> : <div className ='number'>15</div>}
                        <div id="May15" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 16 && month ==='May' ? <div className = 'today number'>16</div> : <div className ='number'>16</div>}
                        <div id="May16" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 17 && month ==='May' ? <div className = 'today number'>17</div> : <div className ='number'>17</div>}
                        <div id="May17" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 18 && month ==='May' ? <div className = 'today number'>18</div> : <div className ='number'>18</div>}
                        <div id="May18" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 19 && month ==='May' ? <div className = 'today number'>19</div> : <div className ='number'>19</div>}
                        <div id="May19" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 20 && month ==='May' ? <div className = 'today number'>20</div> : <div className ='number'>20</div>}
                        <div id="May20" className="body" onClick={addItem}></div>
                    </td>
                </tr>
    {/* 21-27 */}
                <tr>
                    <td>
                        {date === 21 && month ==='May' ? <div className = 'today number'>21</div> : <div className ='number'>21</div>}
                        <div id="May21" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 22 && month ==='May' ? <div className = 'today number'>22</div> : <div className ='number'>22</div>}
                        <div id="May22" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 23 && month ==='May' ? <div className = 'today number'>23</div> : <div className ='number'>23</div>}
                        <div id="May23" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 24 && month ==='May' ? <div className = 'today number'>24</div> : <div className ='number'>24</div>}
                        <div id="May24" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 25 && month ==='May' ? <div className = 'today number'>25</div> : <div className ='number'>25</div>}
                        <div id="May25" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 26 && month ==='May' ? <div className = 'today number'>26</div> : <div className ='number'>26</div>}
                        <div id="May26" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 27 && month ==='May' ? <div className = 'today number'>27</div> : <div className ='number'>27</div>}
                        <div id="May27" className="body" onClick={addItem}></div>
                    </td>
                </tr>
    {/* 28-31 */}
                <tr>
                    <td>
                        {date === 28 && month ==='May' ? <div className = 'today number'>28</div> : <div className ='number'>28</div>}
                        <div id="May28" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 29 && month ==='May' ? <div className = 'today number'>29</div> : <div className ='number'>29</div>}
                        <div id="May29" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 30 && month ==='May' ? <div className = 'today number'>30</div> : <div className ='number'>30</div>}
                        <div id="May30" className="body" onClick={addItem}></div>
                    </td>
                    <td>
                        {date === 31 && month ==='May' ? <div className = 'today number'>31</div> : <div className ='number'>31</div>}
                        <div id="May31" className="body" onClick={addItem}></div>
                    </td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}
export default May
