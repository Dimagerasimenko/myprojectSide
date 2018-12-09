var serviceLinks = document.querySelectorAll(".service-list-column a");
var serviceBlocks = document.querySelectorAll(".service-detail-block");
var j, h, k;

for (i = 0; i < serviceLinks.length; ++i) {
 serviceLinks[i].addEventListener("click", function (event) {
  event.preventDefault(event);
        for (j = 0; j < serviceLinks.length; ++j) {
            serviceLinks[j].classList.remove("service-list-active");
        }
        for (h = 0; h < serviceLinks.length; ++h) {
            if (serviceLinks[h] == this) {
                serviceLinks[h].classList.add("service-list-active");
                for (k = 0; k < serviceBlocks.length; ++k) {
                    serviceBlocks[k].classList.remove("service-detail-active");
                }
                serviceBlocks[h].classList.add("service-detail-active");
            }
        }
 })
}
