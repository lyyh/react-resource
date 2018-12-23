/**
 * @author liuyanhao
 * @date 2018-12-23
 * @Description:
 */
var DiyReact = importFromBelow()
var element = DiyReact.createElement('div',{'data-id':'123'},'hello word')
DiyReact.render(element,document.getElementById('root'))
console.log(element)
