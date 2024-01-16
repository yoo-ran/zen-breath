import { BrowserRouter, Routes, Route } from "react-router-dom"

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/meditation" element={<Meditation />} />
    <Route path="/music" element={<Music />} />
    <Route path="/breath" element={<Breath />} />
    <Route element={<Profile />} />
    <Route path="/setting" element={<Setting />} />
    </Routes>
</BrowserRouter>