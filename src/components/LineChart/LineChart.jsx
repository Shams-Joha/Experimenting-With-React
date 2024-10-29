
import { LineChart as LC, Line, XAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, name: "Student A", mathMarks: 78 },
        { id: 2, name: "Student B", mathMarks: 85 },
        { id: 3, name: "Student C", mathMarks: 92 },
        { id: 4, name: "Student D", mathMarks: 66 },
        { id: 5, name: "Student E", mathMarks: 74 },
        { id: 6, name: "Student F", mathMarks: 88 },
        { id: 7, name: "Student G", mathMarks: 95 },
        { id: 8, name: "Student H", mathMarks: 80 },
        { id: 9, name: "Student I", mathMarks: 70 },
        { id: 10, name: "Student J", mathMarks: 82 }
    ];
    return (
        <div>
            <LC className='text-black' width={500} height={400} data={studentData}>
                <XAxis dataKey="name" />
                <Line className='text-black' dataKey="mathMarks" stroke="#8884d8"></Line>

            </LC>
        </div>
    );
};

export default LineChart;