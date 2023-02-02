import './index.css'

const Table = ({ dayArray }) =>{
    return (
        <table>
            <thead>
                <tr>
                {dayArray.map(weekday=><th>{weekday.slice(0,3)}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="today">1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>    
                <tr>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}
export default Table
