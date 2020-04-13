library(knitr)
#showtext::font_add_google("Noto Sans TC", "tc")

files <- list.files(path="Docs", pattern="*.Rmd", full.names=TRUE, recursive=FALSE)

for (file in files) {
  rmarkdown::render(file)
}
