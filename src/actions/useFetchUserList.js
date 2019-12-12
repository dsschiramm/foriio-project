import { useEffect, useState } from 'react';

const useFetchUserList = ({ page }) => {

	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const fetchPosters = async () => {

			const url = `https://api.foriio.com/api/v1/promoted/users?page=${page}`;

			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Accept-Language": "en-US"
				}
			});

			const json = await response.json();

			setData(json.users);
			setTotal(parseInt(json.meta.total_pages))
		};

		fetchPosters();
	}, [page]);

	return { data, total };
};

export default useFetchUserList;
