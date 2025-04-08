import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Route, Routes } from 'react-router'
import UUIDGenerator from './UUIDGenerator/UUIDGenerator'
import StringUtils from './StringUtils/StringUtils'
import TimeUtils from './TimeUtils/TimeUtils'
import JsonEditor from './JsonEditor/JsonEditor.jsx';
import { Provider } from '@/components/ui/provider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<UUIDGenerator />} />
            <Route path="uuid" element={<UUIDGenerator />} />
            <Route path="string" element={<StringUtils />} />
            <Route path="time" element={<TimeUtils />} />
            <Route path="json" element={<JsonEditor />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode >
)
