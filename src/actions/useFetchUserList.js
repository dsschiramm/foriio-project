import { useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";

const useFetchUserList = ({ page }) => {

	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);
	// const dispatch = useDispatch();

	useEffect(() => {
		const fetchPosters = async () => {
			// dispatch({ type: "START_LOADING" });

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

			// dispatch({ type: "FETCH_USERLIST", payload: userList });
		};

		fetchPosters();
	}, [page]);

	return { data, total };
};

export default useFetchUserList;


// const fetchUserList = () => {
// 	const [data, setData] = useState();

// 	useEffect(() => {
// 		(async () => {

// 			const url = `https://api.foriio.com/api/v1/promoted/users`;

// 			const response = await fetch(url, {
// 				method: "GET",
// 				headers: {
// 					"Content-Type": "application/json",
// 					"Accept-Language": "en-US"
// 				}});

// 				const json = await response.json();

// 				setTimeout(() => setData(json), 1000);
// 			})();
// 		}, []);

// 		return data;
// 	};

// 	export default fetchUserList;
