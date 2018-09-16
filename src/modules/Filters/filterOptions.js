import React from 'react';

const FilterOptions = (props) => {
  return (
    <div className="row">
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="namefilter" className="pull-left">Nombre:</label>
        <input name="namefilter" type="text" autoFocus placeholder="Buscar" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} />
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="pricefilter" className="pull-left">Precio:</label>
        <select name="pricefilter" className="inputBox" value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')}>
          <option value="">{'Todos'}</option>
          <option value="0,100">{'Lps. 0 - 100'}</option>
          <option value="100,125">{'Lps. 100 - 125'}</option>
          <option value="125,150">{'Lps. 125 - 150'}</option>
          <option value="150,175">{'Lps. 150 - 175'}</option>
          <option value="175,">{'Lps. 175+'}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
