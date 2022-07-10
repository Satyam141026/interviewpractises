
import React , {PureComponent} from 'react';
class Pure extends PureComponent
 {




render()
{
  console.warn("rendring")
return(
<div>

<h1>{this.props.count}</h1>

</div>
);
}
}

export default Pure;
