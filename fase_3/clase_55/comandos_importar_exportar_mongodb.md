# Comandos de Importación y Exportación MongoDB

### Importar Colecciones
```sh
# Importar archivo JSON simple
mongoimport --uri="mongodb+srv://cluster0.4i0l5oa.mongodb.net/" \
  -u tuUsuario -p tuPassword \
  --db="nombreDeLaBaseDeDatos" \
  --collection="nombreDeLaColeccion" \
  --file="./nombreDelArchivo.json"

# Importar array JSON
mongoimport --uri="mongodb+srv://cluster0.4i0l5oa.mongodb.net/" \
  -u tuUsuario -p tuPassword \
  --db="nombreDeLaBaseDeDatos" \
  --collection="nombreDeLaColeccion" \
  --file="./nombreDelArchivo.json" \
  --jsonArray
```

### Exportar Colecciones
```sh
# Exportar colección a archivo JSON
mongoexport --uri="mongodb+srv://cluster0.4i0l5oa.mongodb.net/" \
  -u tuUsuario -p tuPassword \
  --db="nombreDeLaBaseDeDatos" \
  --collection="nombreDeLaColeccion" \
  --out="./nombreDelArchivoDeSalida.json"
```

### Exportar Base de Datos
```sh
# Crear backup completo de la base de datos
mongodump --uri="mongodb+srv://tuUsuario:tuPassword@cluster0.4i0l5oa.mongodb.net/nombreDeLaBaseDeDatos" \
  --out="./backups" \
  --gzip
```

**Parámetros:**
- `--out`: Directorio donde se guardarán los archivos de respaldo
- `--gzip`: Comprime los archivos de respaldo en formato gzip

### Importar Base de Datos
```sh
# Restaurar backup completo de la base de datos
mongorestore --uri="mongodb+srv://tuUsuario:tuPassword@cluster0.4i0l5oa.mongodb.net/" \
  --nsInclude="nombreDeLaBaseDeDatos.*" \
  --drop \
  --gzip ./backups
```

**Parámetros:**
- `--nsInclude`: Solo restaura colecciones de la base de datos especificada
- `--drop`: Elimina colecciones existentes antes de restaurar
- `--gzip`: Indica que los archivos están comprimidos en formato gzip

## Diferencias Clave

| Operación          | Comando                     | Uso                                   |
| ------------------ | --------------------------- | ------------------------------------- |
| **Colecciones**    | `mongoimport`/`mongoexport` | Trabajar con colecciones individuales |
| **Bases de datos** | `mongodump`/`mongorestore`  | Backup y restauración completa        |

## Notas Importantes
- Reemplaza `tuUsuario`, `tuPassword` y `nombreDeLaBaseDeDatos` con tus valores reales
- Asegúrate de tener permisos de lectura/escritura en el cluster
- Los archivos de backup se crean en formato BSON (no JSON) para bases de datos completas
