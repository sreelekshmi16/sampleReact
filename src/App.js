import React, { Component, Fragment } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TableList from './TableList';
import './App.css';

const list = [{ id: 1, firstName: "anu", lastName: "rahul", Age: "20", Address: "jdjj,male", Mark: "80", Status: "Passed", Ischecked: "false" },
{ id: 2, firstName: "Banu", lastName: "rahul", Age: "22", Address: "ddhgg,dfgyd", Mark: "80", Status: "Passed", Ischecked: "false" },
{ id: 3, firstName: "chinnu", lastName: "Athul", Age: "24", Address: "ddvd,hhdgyw", Mark: "90", Status: "Passed", Ischecked: "false" },
{ id: 4, firstName: "Divin", lastName: "Dev", Age: "26", Address: "dywhw,nci", Mark: "70", Status: "Passed", Ischecked: "false" },
{ id: 5, firstName: "Emil", lastName: "Joseph", Age: "29", Address: "ojihc,cvh", Mark: "78", Status: "Passed", Ischecked: "false" },
{ id: 6, firstName: "Gowri", lastName: "Krishna", Age: "23", Address: "qwyhd,ojoc", Mark: "65", Status: "Failed", Ischecked: "false" },
{ id: 7, firstName: "Jhanvi", lastName: "Liz", Age: "22", Address: "fesf,efale", Mark: "67", Status: "Failed", Ischecked: "false" },
{ id: 8, firstName: "Karthik", lastName: "Nath", Age: "21", Address: "malfueuf,e", Mark: "86", Status: "Passed", Ischecked: "false" },
{ id: 9, firstName: "Lijo", lastName: "Jose", Age: "26", Address: "male", Mark: "80", Status: "Passed", Ischecked: "false" },
{ id: 10, firstName: "Midhila", lastName: "Raj", Age: "29", Address: "feffff,wwf", Mark: "34", Status: "Failed", Ischecked: "false" },
{ id: 11, firstName: "Nima", lastName: "Pradeep", Age: "28", Address: "effff,emale", Mark: "50", Status: "Failed", Ischecked: "false" },
{ id: 12, firstName: "Prithvi", lastName: "Raj", Age: "26", Address: "wdfw,wfle", Mark: "98", Status: "Passed", Ischecked: "false" },
{ id: 13, firstName: "Rohan", lastName: "John", Age: "22", Address: "vgr,eale", Mark: "100", Status: "Passed", Ischecked: "false" }]

class App extends Component {
  state = {
    input: "",
    list: list,
    searchResult: list,
    isOpen: false,
    filterValue: "All",
    all: false,
    checked: false,
    selectedchecklist: [],
    checkBoxes: {
      "addresscheck": false,
      "markcheck": false,
      "statuscheck": false,

    }

  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  selectAllHandler = () => {
    console.log('selectAllHandler')
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log("current: ", value)

    const { searchResult, selectedchecklist } = this.state;
    const isSelectAll = this.onSelectAllCheck();
    console.log('isSelectAll', isSelectAll);
    let allList = [];
    if (!isSelectAll) {
      allList = searchResult
    } 
    else {
      allList =[];
    }
    console.log('allList', allList)
    this.setState({
      selectedchecklist: allList

    });
    console.log("selectedlist now", this.state.selectedchecklist)
  }

  onSelectAllCheck = () => {
    console.log('onSelectAllCheck')
    const { searchResult, selectedchecklist } = this.state;

    if (searchResult.length === selectedchecklist.length) return true;
    else return false;
  }






  onCheckHandler = e => {

    const { id, value, checked } = e.target;
    const { list, searchResult } = this.state
let { selectedchecklist } = this.state
    let tempArray = [];
    const index = selectedchecklist.findIndex(item => item.id === parseInt(id));
    console.log("checkselect", index)
    if (index === -1) {
        
      const selectedItem = searchResult.find(item => {
        if (item.id === parseInt(id))
        
          return item;
          
      })
      console.log('selectedItem------------', selectedItem)
      selectedchecklist.push(selectedItem)
      //  searchResult.map(item=>{item.id===parseInt(id)
      console.log("selecteditem", selectedchecklist)

    }
    else if (index >= 0){
      // selectedchecklist.splice(index, 1);
       tempArray = selectedchecklist.filter(item => item.id !== parseInt(id))
      console.log("sliced", selectedchecklist)
      selectedchecklist = [...tempArray]
    }
    // console.log("selected array", selectedchecklist)
    this.setState({
      // searchResult: [...searchResult],
      selectedchecklist
      // Ischecked : true
    })
  }
  onCheckTickHandler = (id) => {
    console.log("----currentId", id)
    const { selectedchecklist } = this.state;

    const item = selectedchecklist.find(item => {
      if (item.id === id) {
        return item
      }

    });
    if (item) return true;
    else return false;

  }

  


  onChangeHandler = event => {
    const target = event.target;
    const inputName = target.name;
    const currentValue = this.state.checkBoxes[inputName];

    console.log("InputName: " + inputName)
    console.log("CurrentValue: " + currentValue)

    this.setState(previousState => ({
      checkBoxes: {
        ...this.state.checkBoxes,
        [inputName]: !currentValue,
      }
      // checked:!previousState.checked
    }), () => {
      console.log("msg", this.state)
    });
  };

  checkHandler = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log("valueee", value);
    if (target.name === "all") {
      console.log("name", target.name)

      this.setState(prevState => ({
        checkBoxes: {
          addresscheck: target.checked,
          markcheck: target.checked,
          statuscheck: target.checked
        }
      }))


    }

    console.log("checked", value)
  }


  searchHandler = (event) => {
    const value = event.target.value;
    const { list } = this.state;
    console.log("value", value)
    // const searchResult = list.filter(el => el.firstName.toLowerCase().match(value.toLowerCase()))
    // const searchResult = list.filter(item => {return item.firstName.toLowerCase().includes(value.toLowerCase())||item.lastName.toLowerCase().includes(value.toLowerCase())});
    const searchResult = list.filter(item => {
      const resultCheck = item.firstName + ' ' + item.lastName;
      console.log("resultCheck", resultCheck)
      return resultCheck.toLowerCase().includes(value.toLowerCase())
    });
    console.log("searchResult", searchResult)
    this.setState({
      input: value,
      // list:this.state.list.match(pattern)
      searchResult: searchResult
    });
  }
  deleteHandler = () => {
    const { list } = this.state;
    // const values = event.target.value;
    this.setState(prevState => ({
      searchResult: list,
      input: ""
    }));
  }


  handleChangeFilter = value => {
    // const value = e.target;
    console.log("value", value)
    this.setState({
      filterValue: value
    });
    let searchResult = [];
    if (value !== "All")
      searchResult = list.filter(item => item.Status === value);
    else searchResult = list
    this.setState({
      searchResult
    })
  }
  testHandler =event=>{
    console.log("test test test test")
  }

  render() {
    console.log("searchResult", this.state.searchResult);
    console.log('value', this.value)
    console.log("this.state", this.state)
    console.log("selectedchecklist", this.state.selectedchecklist)
    const { list, input, isOpen, filterValue, checkBoxes, Ischecked } = this.state;
    return (
      <Fragment>
        <div className="App">
          <TableList
            searchResult={this.state.searchResult}
            list={list}
            searchHandler={this.searchHandler}
            deleteHandler={this.deleteHandler}
            input={input}
            isOpen={isOpen}
            toggle={this.toggle}
            filterValue={filterValue}
            handleChangeFilter={this.handleChangeFilter}
            checkHandler={this.checkHandler}
            checked={this.state.checked}
        
            onChangeHandler={this.onChangeHandler}
            checkBoxes={checkBoxes}
            Ischecked={Ischecked}
            selectAllHandler={this.selectAllHandler}
            onCheckHandler={this.onCheckHandler}
            onCheckTickHandler={this.onCheckTickHandler}
            onSelectAllCheck={this.onSelectAllCheck}
            testHandler={this.testHandler}
          
          />
        </div>

      </Fragment>
    )
  }
}


export default App;
