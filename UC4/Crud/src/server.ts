import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())