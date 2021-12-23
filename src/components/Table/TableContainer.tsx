/**
 * @author Anna Mikhailova <amikhailova@usetech.com>
 */

 import React, { FC } from 'react';
 import './TableContainer.scss';
 import {
     DashedDivider,
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeaderCell,
     TableRow
 } from './components';
 import { Text, Icon } from '..';
 import classNames from 'classnames';
 
 export type TSize = 'm' | 's';
 export type TColor = 'primary' | 'blue-grey';
 
 type TColumn = {
     title: string;
     dataIndex: string;
     key: string;
     width?: number;
     size?: TSize;
     color?: TColor;
     icon?: string;
     render: (rowNumber: number) => JSX.Element;
     columnClickHandle?: (column: string) => void;
 };
 
 interface ITableContainerProps {
     columns: Array<TColumn>;
     data: Array<{ [key: string]: string }>;
     className?: string;
 }
 
 const TableContainer: FC<ITableContainerProps> = ({
     columns,
     data,
     className
 }: ITableContainerProps) => {
    
     const tableHead = (
         <TableRow>
             {columns.map((column) => {
                 return (
                     <TableHeaderCell key={column.key}>
                         <div
                             className="column"
                             onClick={
                                 column.columnClickHandle
                                     ? () =>
                                           column.columnClickHandle!(column.key)
                                     : () => {}
                             }
                         >
                             <Text
                                 size={column.size || 'm'}
                                 color={
                                     column.color === 'primary'
                                         ? 'primary-500'
                                         : 'blue-grey-600'
                                 }
                             >
                                 {column.title}
                             </Text>
                             {column.icon && (
                                 <div className="icon-wrapper">
                                     <Icon
                                         color={
                                             column.color === 'primary'
                                                 ? '#009CF0'
                                                 : '#647789'
                                         }
                                         name={column.icon}
                                         size={13}
                                     ></Icon>
                                 </div>
                             )}
                         </div>
                     </TableHeaderCell>
                 );
             })}
         </TableRow>
     );
     const tableBody = data.map((rowData, i) => {
         const row = columns.map((column, index) => {
             return (
                 <TableCell key={`${i}-${column.key}-${index}`}>
                     {column.render ? column.render(i) : rowData[column.key]}
                 </TableCell>
             );
         });
         return (
             <React.Fragment key={`${rowData.fee}-${i}`}>
                 <TableRow>{row}</TableRow>
                 <DashedDivider />
             </React.Fragment>
         );
     });
 
     return (
         <Table className={classNames('unique-table-outer', className)}>
             <TableHead>{tableHead}</TableHead>
             <TableBody>{tableBody}</TableBody>
         </Table>
     );
 };
 
 
 export default TableContainer;
 
 