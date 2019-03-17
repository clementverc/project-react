import React, { Component } from 'react'

class SelectFields extends Component {
  render() {
    return (
      <div className="">
        <div className="row form-group">
          <select className="form-control form-control-lg" id="SelectConstructor">
            <option value="Honda">HONDA</option>
            <option value="Suzuki">SUZUKI</option>
            <option value="Yamaha">YAMAHA</option>
            <option value="Ducati">DUCATI</option>
          </select>
        </div>
        <div className="row form-group">
          <select className="form-control form-control-lg" id="SelectCategory">
            <option value="Sportive">Sportive</option>
            <option value="Roadster">Roadster</option>
            <option value="Trail">Trail</option>
            <option value="GT">GT</option>
          </select>
        </div>
        <div className="row form-group">
          <select className="form-control form-control-lg" id="SelectPermis">
            <option value="A">A</option>
            <option value="A2">A2</option>
            <option value="A1">A1</option>
            <option value="AM">AM</option>
          </select>
        </div>
        <div className="row form-group">
          <select className="form-control form-control-lg" id="SelectGuidon">
            <option value="Guidon droit">Guidon Roadster</option>
            <option value="Guidon Bracelets">Guidon Bracelets</option>
            <option value="Guidon Custom">Guidon Custom</option>
            <option value="Pas de Guidon">Pas de Guidon</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SelectFields
