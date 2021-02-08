// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import {ResponsiveBar} from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = () => {

    const data = [
        {
            "location": "Budapest",
            "0-1": 18.2,
            "hot dogColor": "hsl(191, 70%, 50%)",
            "2-4": 18.5,
            "burgerColor": "hsl(300, 70%, 50%)",
            "5-5": 5.5,
            "sandwichColor": "hsl(287, 70%, 50%)",
            "6-8": 16.7,
            "kebabColor": "hsl(284, 70%, 50%)",
            "9-10": 2.0,
            "friesColor": "hsl(162, 70%, 50%)",
            // "donut": 50,
            // "donutColor": "hsl(16, 70%, 50%)"
        },
        {
            "location": "Cracow",
            "0-1": 16.0,
            "hot dogColor": "hsl(306, 70%, 50%)",
            "2-4": 8.8,
            "burgerColor": "hsl(195, 70%, 50%)",
            "5-5": 6.9,
            "sandwichColor": "hsl(95, 70%, 50%)",
            "6-8": 6.7,
            "kebabColor": "hsl(307, 70%, 50%)",
            "9-10": 0.5,
            "friesColor": "hsl(53, 70%, 50%)",
            // "donut": 80,
            // "donutColor": "hsl(285, 70%, 50%)"
        },
        {
            "location": "Miskolc",
            "0-1": 0.9,
            "hot dogColor": "hsl(224, 70%, 50%)",
            "2-4": 9.1,
            "burgerColor": "hsl(214, 70%, 50%)",
            "5-5": 1.2,
            "sandwichColor": "hsl(347, 70%, 50%)",
            "6-8": 6.1,
            "kebabColor": "hsl(256, 70%, 50%)",
            "9-10": 13.8,
            "friesColor": "hsl(103, 70%, 50%)",
            // "donut": 11,
            // "donutColor": "hsl(342, 70%, 50%)"
        },
        {
            "location": "Warsaw",
            "0-1": 1.0,
            "hot dogColor": "hsl(258, 70%, 50%)",
            "2-4": 4.2,
            "burgerColor": "hsl(50, 70%, 50%)",
            "5-5": 0.2,
            "sandwichColor": "hsl(164, 70%, 50%)",
            "6-8": 12.9,
            "kebabColor": "hsl(54, 70%, 50%)",
            "9-10": 12.3,
            "friesColor": "hsl(126, 70%, 50%)",
            // "donut": 157,
            // "donutColor": "hsl(264, 70%, 50%)"
        },
        {
            "location": "Bucharest",
            "0-1": 3.2,
            "hot dogColor": "hsl(252, 70%, 50%)",
            "2-4": 18.6,
            "burgerColor": "hsl(278, 70%, 50%)",
            "5-5": 17.0,
            "sandwichColor": "hsl(25, 70%, 50%)",
            "6-8": 17.2,
            "kebabColor": "hsl(63, 70%, 50%)",
            "9-10": 12.3,
            "friesColor": "hsl(194, 70%, 50%)",
            // "donut": 199,
            // "donutColor": "hsl(65, 70%, 50%)"
        },
        // {
        //     "country": "AL",
        //     "hot dog": 27,
        //     "hot dogColor": "hsl(204, 70%, 50%)",
        //     "burger": 158,
        //     "burgerColor": "hsl(73, 70%, 50%)",
        //     "sandwich": 7,
        //     "sandwichColor": "hsl(206, 70%, 50%)",
        //     "kebab": 156,
        //     "kebabColor": "hsl(62, 70%, 50%)",
        //     "fries": 191,
        //     "friesColor": "hsl(156, 70%, 50%)",
        //     "donut": 143,
        //     "donutColor": "hsl(251, 70%, 50%)"
        // },
        // {
        //     "country": "AM",
        //     "hot dog": 127,
        //     "hot dogColor": "hsl(161, 70%, 50%)",
        //     "burger": 11,
        //     "burgerColor": "hsl(25, 70%, 50%)",
        //     "sandwich": 12,
        //     "sandwichColor": "hsl(51, 70%, 50%)",
        //     "kebab": 87,
        //     "kebabColor": "hsl(42, 70%, 50%)",
        //     "fries": 18,
        //     "friesColor": "hsl(168, 70%, 50%)",
        //     "donut": 36,
        //     "donutColor": "hsl(257, 70%, 50%)"
        // }
    ]

    return (
        <div className="bar-container">
            <ResponsiveBar
                data={data}
                keys={['0-1', '2-4', '5-5', '6-8', '9-10']}
                indexBy="location"
                layout="horizontal"
                minValue={0}
                maxValue={100}
                margin={{top: 50, right: 130, bottom: 50, left: 60}}
                padding={0.3}
                valueScale={{type: 'linear'}}
                indexScale={{type: 'band', round: true}}
                colors={{"scheme":"blues"}}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#cad8e7',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#5fb2d2',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: '9-10'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: '6-8'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '%',
                    legendPosition: 'middle',
                    legendOffset: 40
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: '%',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>);

}

export default MyResponsiveBar