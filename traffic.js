const rightStart = document.querySelector('#bottom-right');
const frontStart = document.querySelector('#bottom-front');

$( document ).ready(function() {

  $(".traffic-light path").not($( ".contrast-content" )).css('fill', '#1B2A85');
  const getColorInfo = (node) => {
    const lightInfo = {};
    lightInfo.node = node;
    lightInfo.color = node.id;
    lightInfo['color-on'] = `${lightInfo.color}-on`;
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

  const switchLights = (node, firstNode, time) => {
    const isLastNode = Array.from(node.classList).indexOf('last-node') > -1;
    let nextNode;
    isLastNode ? nextNode = firstNode : nextNode = node.previousElementSibling;
    lightOn(node);
    setTimeout(() => {
      lightOff(node);
      switchLights(nextNode, firstNode);
    }, 2500);
  };

  switchLights(document.querySelector('#bottom-front'), frontStart);
  switchLights(document.querySelector('#top-right'), rightStart);

});
