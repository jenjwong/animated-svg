// $( document ).ready(function() {
//   $( ".traffic-light path" ).not( $( ".contrast-content" ) ).css('fill', '#201F7C')
//   const getColorInfo = (node) => {
//     const lightInfo = {};
//     lightInfo.node = node;
//     lightInfo.color = node.id;
//     lightInfo['color-on'] = lightInfo.color + '-on';
//     return lightInfo;
//   };
//
//   const lightOff = (node) => {
//     const bulb = getColorInfo(node);
//     node.removeClass(bulb['color-on']);
//     node.addClass(bulb.color);
//   };
//
//   const lightOn = (node) => {
//     const bulb = getColorInfo(node);
//     node.removeClass(bulb.color);
//     const color = $(bulb['color-on'])
//     node.addClass(color);
//     console.log(node)
//   };
//
//   const switchLights = (node) => {
//     const $node = $(node)
//     const isLastNode = $node.hasClass('last-node')
//     const firstNode = document.querySelector('#bottom-front');
//     var nextNode;
//     if (isLastNode) {
//       nextNode = firstNode
//
//     } else {
//       nextNode = $node.prev();
//     }
//     lightOn($node);
//     setTimeout(() => {
//       lightOff($node);
//       switchLights(nextNode);
//     }, 2500);
//   };
//
//   switchLights(document.querySelector('#bottom-front'));
//
// });
//

const rightStart = document.querySelector('#bottom-right')
const frontStart = document.querySelector('#bottom-front')


$( document ).ready(function() {
  $( ".traffic-light path" ).not( $( ".contrast-content" ) ).css('fill', '#201F7C')
  const getColorInfo = (node) => {
    const lightInfo = {};
    lightInfo.node = node;
    lightInfo.color = node.id;
    lightInfo['color-on'] = lightInfo.color + '-on';
    return lightInfo;
  };

  const lightOff = (node) => {
    const bulb = getColorInfo(node);
    node.classList.remove(bulb['color-on']);
    node.classList.add(bulb.color);
  };

  const lightOn = (node) => {
    const bulb = getColorInfo(node);
    node.classList.remove(bulb.color);
    node.classList.add(bulb['color-on']);
  };

  const switchLights = (node, firstNode) => {
    const isLastNode = Array.from(node.classList).indexOf('last-node') > -1;
    const isBulb = Array.from(node.classList).indexOf('bulb') > -1;
    var nextNode;
    if (isLastNode) {
      nextNode = firstNode

    } else {
      nextNode = node.previousElementSibling
    }
    console.log(isBulb)
    if (isBulb) {
      lightOn(node);
      setTimeout(() => {
        lightOff(node);
        switchLights(nextNode, firstNode);
      }, 4000);
    }
  };

  console.log(document.querySelector('#bottom-right'))



  switchLights(document.querySelector('#bottom-front'), frontStart);
  // switchLights(document.querySelector('#bottom-right'), rightStart);

});
