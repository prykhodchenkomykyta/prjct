// @ts-nocheck
import { FC } from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '@/ui//theme';

interface Props {
  title: string;
  subtitle: string;
}

const Header:FC<Props> = ({ title, subtitle }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box mb='30px'>
			<Typography 
				variant='h2' 
				color={colors.grey[100]} 
				fontWeight='bold' 
				sx={{ mb: '5px' }}
				>
				{title}
			</Typography>
			<Typography variant='h5' color={colors.greenAccent[400]}>{subtitle}</Typography>
		</Box>
	)
}

export default Header
