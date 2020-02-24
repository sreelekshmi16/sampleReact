import React, { Fragment } from 'react';
import { Table } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, Button, Input } from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';
const tableList = props => {
  const {list, searchResult, searchHandler, input, deleteHandler, toggle, isOpen, filterValue, handleChangeFilter,checkHandler,checked,onChangeHandler,checkBoxes,selectAllHandler,Ischecked,onCheckHandler,onCheckTickHandler,onSelectAllCheck,testHandler} = props;
  console.log("props", props)

  return (
    <Fragment>
      <input type="text" value={input} onChange={searchHandler} />
      <Button type="button" onClick={() => { deleteHandler() }}>clear</Button>
      {/* <Button type="button" onClick={()=>testHandler()}>Test</Button> */}

      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle caret>
          {filterValue}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => { handleChangeFilter("All") }}
          >All</DropdownItem>
          <DropdownItem
            onClick={(e) => { handleChangeFilter("Passed") }}
          >
            Passed</DropdownItem>
          <DropdownItem
            onClick={(e) => { handleChangeFilter("Failed") }}
          >
            Failed</DropdownItem>

        </DropdownMenu>
      </Dropdown>
     
      <Table  dark stripped>
        <tr>
          <th><Form>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" name="Select All" value="Select All" id={700} onChange={selectAllHandler} checked={onSelectAllCheck()} /> select All
        </Label>
          </FormGroup>
          </Form></th>
          <th>Name  <button type="button">></button>
          </th>
          <th>Age</th>
          <th>Address</th>
          <th>Marks</th>

          <th>Status</th>
        </tr>
        {
          searchResult && searchResult.length > 0 && searchResult.map(item => (
            <tr key={item.id}>
            <td>
              <Form>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" name="" id ={item.id} onChange={(e)=>onCheckHandler(e)} checked={onCheckTickHandler(item.id)} value={item.id}/> 
        </Label>
          </FormGroup>
          </Form>
          </td>
              <td >{`${item.firstName} ${item.lastName}`}</td>
              <td>{item.Age}</td>
              <td>{item.Address}</td>
              <td>{item.Mark}</td>
              <td>{item.Status}</td>
            </tr>
          ))
        }


      </Table>
      <div >
        <Form>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" name="all" onChange={checkHandler} /> Select All
        </Label>
          </FormGroup>
          <FormGroup check >
            <Label check >
              <Input type="checkbox" name="addresscheck" onChange={onChangeHandler}  checked={checkBoxes.addresscheck} /> Address checked
    
        </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" name="markcheck"  onChange={onChangeHandler} checked={checkBoxes.markcheck} /> Marks checked
        </Label>

          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="checkbox" name="statuscheck"  onChange={onChangeHandler}  checked={checkBoxes.statuscheck} /> Status checked
        </Label>

          </FormGroup>
        </Form>
      </div>

    </Fragment>
  );
}
export default tableList;