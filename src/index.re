type state = {
  value: string,
  intValue: int,
};

type action = 
  | UpdateValue(string);

let component = ReasonReact.reducerComponent("NumericInput");

let formatNumber = (_value: string) => {
 
};

let addPrefix = (value: string, prefix: string) => prefix ++ value;
let addSuffix = (value: string, suffix: string) => value ++ suffix;

let make = (~onChange, ~value: string, _children) => {
  let handleChange = (event: ReactEventRe.Form.t, self) => {
    let value: string = ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value;
    /* ReasonReact.SideEffects(self => self.send(UpdateValue(value))); */
    self.ReasonReact.send(UpdateValue(value));
    onChange(value, event);
  };
  
  {
    ...component,
    initialState: () => {
      value: value,
      intValue: 1,
    },
    reducer: action =>
      switch (action) {
      | UpdateValue(value) => (state => ReasonReact.Update({...state, value: value}))
      },
    render: ({ state, handle }) =>
      <div className="NumericControl">
        <input
          className="NumericControl-input"
          _type="tel"
          value=state.value
          onChange=(handle(handleChange))
        />  
      </div> 
  }
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component, 
    (jsProps) =>
      make(
        ~value=jsProps##value,
        ~onChange=jsProps##onChange,
        [||]
      )
  );