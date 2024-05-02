import { Skeleton, Box } from '@chakra-ui/react'

const Loading = () => {
  // Nombre de lignes et de colonnes pour les squelettes de cartes
  const rows = 3;
  const cols = 3;

  return (
    <Box>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Box key={rowIndex} display="flex" gap={2}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Skeleton key={colIndex} width="300px" height="500px" m="1" borderRadius={20} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Loading