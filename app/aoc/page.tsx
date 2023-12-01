"use client";
import React from "react";
import { View, Table, TableHead, TableRow, TableBody, TableCell, Badge} from "@aws-amplify/ui-react";

import D1P1 from "@/aoc-code/D1P1";
import D1P2 from "@/aoc-code/D1P2";

export default function Advent() {

    const results = [
        {id: 1, date: "1", puzzle: "1", result: <D1P1></D1P1>, place: "Gold", code: ''},
        {id: 2, date: "1", puzzle: "2", result: <D1P2></D1P2>, place: "Gold", code: ''},
        {id: 3, date: "2", puzzle: "1", result: "", place: false, code: ''},
        {id: 4, date: "2", puzzle: "2", result: "", place: false, code: ''},
        {id: 5, date: "3", puzzle: "1", result: "", place: false, code: ''},
        {id: 6, date: "3", puzzle: "2", result: "", place: false, code: ''},
        {id: 7, date: "4", puzzle: "1", result: "", place: false, code: ''},
        {id: 8, date: "4", puzzle: "2", result: "", place: false, code: ''},
        {id: 9, date: "5", puzzle: "1", result: "", place: false, code: ''},
        {id: 10, date: "5", puzzle: "2", result: "", place: false, code: ''},
        {id: 11, date: "6", puzzle: "1", result: "", place: false, code: ''},
        {id: 12, date: "6", puzzle: "2", result: "", place: false, code: ''},
        {id: 13, date: "7", puzzle: "1", result: "", place: false, code: ''},
        {id: 14, date: "7", puzzle: "2", result: "", place: false, code: ''},
        {id: 15, date: "8", puzzle: "1", result: "", place: false, code: ''},
        {id: 16, date: "8", puzzle: "2", result: "", place: false, code: ''},
        {id: 17, date: "9", puzzle: "1", result: "", place: false, code: ''},
        {id: 18, date: "9", puzzle: "2", result: "", place: false, code: ''},
        {id: 19, date: "10", puzzle: "1", result: "", place: false, code: ''},
        {id: 20, date: "10", puzzle: "2", result: "", place: false, code: ''},
        {id: 21, date: "11", puzzle: "1", result: "", place: false, code: ''},
        {id: 22, date: "11", puzzle: "2", result: "", place: false, code: ''},
        {id: 23, date: "12", puzzle: "1", result: "", place: false, code: ''},
        {id: 24, date: "12", puzzle: "2", result: "", place: false, code: ''},
        {id: 25, date: "13", puzzle: "1", result: "", place: false, code: ''},
        {id: 26, date: "13", puzzle: "2", result: "", place: false, code: ''},
        {id: 27, date: "14", puzzle: "1", result: "", place: false, code: ''},
        {id: 28, date: "14", puzzle: "2", result: "", place: false, code: ''},
        {id: 29, date: "15", puzzle: "1", result: "", place: false, code: ''},
        {id: 30, date: "15", puzzle: "2", result: "", place: false, code: ''},
        {id: 31, date: "16", puzzle: "1", result: "", place: false, code: ''},
        {id: 32, date: "16", puzzle: "2", result: "", place: false, code: ''},
        {id: 33, date: "17", puzzle: "1", result: "", place: false, code: ''},
        {id: 34, date: "17", puzzle: "2", result: "", place: false, code: ''},
        {id: 35, date: "18", puzzle: "1", result: "", place: false, code: ''},
        {id: 36, date: "18", puzzle: "2", result: "", place: false, code: ''},
        {id: 37, date: "19", puzzle: "1", result: "", place: false, code: ''},
        {id: 38, date: "19", puzzle: "2", result: "", place: false, code: ''},
        {id: 39, date: "20", puzzle: "1", result: "", place: false, code: ''},
        {id: 40, date: "20", puzzle: "2", result: "", place: false, code: ''},
        {id: 41, date: "21", puzzle: "1", result: "", place: false, code: ''},
        {id: 42, date: "21", puzzle: "2", result: "", place: false, code: ''},
        {id: 43, date: "22", puzzle: "1", result: "", place: false, code: ''},
        {id: 44, date: "22", puzzle: "2", result: "", place: false, code: ''},
        {id: 45, date: "23", puzzle: "1", result: "", place: false, code: ''},
        {id: 46, date: "23", puzzle: "2", result: "", place: false, code: ''},
        {id: 47, date: "24", puzzle: "1", result: "", place: false, code: ''},
        {id: 48, date: "24", puzzle: "2", result: "", place: false, code: ''},
        {id: 49, date: "25", puzzle: "1", result: "", place: false, code: ''},
        {id: 50, date: "25", puzzle: "2", result: "", place: false, code: ''},
        ]
    const columns = [
        {
        key: "date",
        label: "Day",
        },
        {
        key: "puzzle",
        label: "Puzzle",
        },
        {
        key: "result",
        label: "Answer",
        },
        {
        key: "place",
        label: "Result",
        },
        {
        key: "code",
        label: "Code    ",
        },
    ];

    return (<>
    <View
    display={"flex"}
    flex={1}
    alignSelf={"center"}>
    <Table   
        caption="Advent of Code 2023"
        highlightOnHover={true}
        width={"50%"}
        alignSelf="center">
        <TableHead>
            <TableRow>
                {columns.map((item, index) => (            
                <TableCell key= {index}>{item.label}</TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
        {results.map((item, index) => (        
         <TableRow key={index}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.puzzle}</TableCell>
            <TableCell>{item.result}</TableCell>
            {item.place === 'Gold' && 
                <TableCell>
                    <Badge backgroundColor={"gold"}>Gold</Badge>
                </TableCell>
            }
            {item.place === 'Silver' && 
                <TableCell>
                    <Badge backgroundColor={"silver"}>Silver</Badge>
                </TableCell>
            }
            {item.place === 'Bronze' && 
                <TableCell>
                    <Badge backgroundColor={"yellow"}>Bronze</Badge>
                </TableCell>
            }            
            {!item.place && 
                <TableCell>
                    <Badge backgroundColor={"white"}>TBD</Badge>
                </TableCell>
            }           
        <TableCell>{item.code}</TableCell>
 
        </TableRow>
        ))}
        </TableBody>
    </Table>
    </View>
    </>
)};

