
# librerias ---------------------------------------------------------------

library(openxlsx)
library(jsonlite)



# importar ----------------------------------------------------------------

d <- openxlsx::read.xlsx('elementos.xlsx')




# convertir a json --------------------------------------------------------

j <- toJSON(x = d, method = 'C', )




# escribir a archivo json -------------------------------------------------

write(x = j, file = 'elementos.json')

print("Se ha ejecutado correctamente")

