--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    email text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortenUrl" text NOT NULL,
    visited integer DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sessions (id, "userId", token, email, "createdAt") FROM stdin;
1	1	11c85319-b5b4-415f-b9e3-6b8f3598208f	joao@driven.com.br	2022-08-08
2	2	7d8a43dd-27a2-4773-b2b8-0f0cb64d4a5a	nina@teste.com	2022-08-08
3	10	54a89d76-a5bc-4299-9a68-9f9e5af43705	giulinha@email.com.br	2022-08-08
4	11	ead968fc-7ac9-4d45-9208-b552eaed4727	anamaria@email.com.br	2022-08-08
5	12	a536ab55-94a8-419e-aae4-cff0978dc248	bento@email.com.br	2022-08-08
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.urls (id, "userId", url, "shortenUrl", visited, "createdAt") FROM stdin;
2	1	https://...	VA52YvVgj5S31zH4PAtiU	1	2022-08-08
1	1	https://...	swZ_wj8qgZFDcJPeqWUv9	14	2022-08-08
5	2	https://www.google.com	8yjHCRaHLpMquB3-W-uSC	3	2022-08-08
6	2	https://...	TA8jHF0sIrcSr-WmfNfd4	1	2022-08-08
7	10	https://...	MEHv9Cy6ddCn7rg_wCZDc	0	2022-08-08
9	10	https://...	bc1Ja7_ID4Z59yGd_Kiys	0	2022-08-08
11	10	https://...	P0vYMpf9dqhnu-GcZVW3k	0	2022-08-08
12	11	https://...	MHva8_hDRX-6QiUZqVp1f	0	2022-08-08
13	11	https://...	vOFVwrJJVsHvgSLhtEPJT	0	2022-08-08
14	11	https://...	RMcpcgGNT8eqFQdWB-sG2	0	2022-08-08
15	12	https://...	P_rYhz5494a5MFZMxULsR	0	2022-08-08
8	10	https://...	nQ4a0tZ7O_xNN75FUtJQF	1	2022-08-08
10	10	https://...	7c9JKRrpUZPaReN_5OEUI	7	2022-08-08
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, password, email, name, "createdAt") FROM stdin;
1	$2b$10$cpnDbR8PPXpIY2UPA6xl4OeL0tQGzXpIONjsXblPMqh2vol4xmEee	joao@driven.com.br	João	2022-08-08
2	$2b$10$HhGvY6QQ2zYwpUosluAFseRtxN8.Qwa4GVJco9wz51eZNkkjgTJEu	nina@teste.com	Nina	2022-08-08
3	$2b$10$bcdb83yx0Kj4pvShhT9/3eGz4oL8MyAPqI3dgZT9jmIltUNkG.sXm	maria@oi.com	Maria	2022-08-08
4	$2b$10$jjdbznRrwOGWqcmJp8S2F.tUeWGZ9f5mDc8dq/j68pl03A./.luHa	ana@oi.com	Ana	2022-08-08
5	$2b$10$W.vZ/CUMBWG3D88.H07Zdu9TMiwIaYfO8hucFu7ZWDei3KvcuE3tu	mariana@email.com.br	Mariana	2022-08-08
6	$2b$10$bvWG9yqQk1FToPXj7NJsVu0RBNw82WMwwp2vQgMjgwwmw.w9ntLO2	marquinhos@email.com.br	Marcos	2022-08-08
7	$2b$10$h7t2P/SNURkk1tbQbzCjCeyg27b2y8Gfs72G2S1CTlChXqkUMeP3i	rita@novo.com	Rita de Cássia	2022-08-08
8	$2b$10$jNwTfnKXWw3Kc5Jrg/DwwOX4A1Cn9oPtu81YZ7QxP1T721LM/OXEq	pedrinho@novos.com	Pedro	2022-08-08
9	$2b$10$yeDDWds9q0DXRHJGqmUfnOy.s9bErhjrkusYpl2gqp5eMc7SZZMB.	lipe@novos.com	Felipe	2022-08-08
10	$2b$10$Cgj/oGjiZPzGWfKT5EHXH.iTsXgJ3w8kEHmbgKvpSzErlaE5Zmx4.	giulinha@email.com.br	Giulia	2022-08-08
11	$2b$10$BBeEe/ondEhg.aMPlimkOOh6In1PlTmeEZWPX1vCPHvx4KDAqFyTy	anamaria@email.com.br	Ana Maria	2022-08-08
12	$2b$10$lSRRmUZj0.rapOuhustxYOJv.Sf9YNEbyU2q8m7d8hZJEX7K5.Px6	bento@email.com.br	Bento	2022-08-08
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 5, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 15, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

