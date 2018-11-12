import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  addten: () => dispatch({ type: "ADDTEN" }),
  removeten: () => dispatch({ type: "REMOVETEN" }),
  reset: () => dispatch({ type: "RESET" }),
})

const CounterContainer = ({ count, add,remove, addten, removeten, reset }) => (
  <div>
    <p>{count}</p>
    <button onClick={add}>Add</button>
    <button onClick={addten}>Add 10</button>
    <button onClick={remove}>Remove</button>
    <button onClick={removeten}>Remove 10</button>
    <button onClick={reset}>Reset</button>
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)