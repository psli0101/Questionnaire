import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default{
  install (Vue, options) {
    Vue.prototype.$getPdf = function (item) {
      console.log("Hello", item)
      let title = this.htmlTitle + item.name + item.num
      console.log("If DOC is here", document.querySelector('#pdfDom'))
      html2Canvas(document.body, {
        allowTaint: true,
        windowHeight: document.body.scrollHeight,
        x: 0,
        y: window.pageYOffset
      }).then(function (canvas) {
        console.log("Look Here", canvas)
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        const imgWidth = 595.28
        let imgHeight = 592.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'px', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 10, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      }
      )
    }
  }
}

/* 作者：前端小白ML
链接：https://juejin.im/post/5c137eee6fb9a049f361fd14
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */