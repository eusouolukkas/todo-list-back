import { Request, Response } from 'express';
import Task, { ITask } from '../app/models/taskModel';

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Instability on the server!" });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { description } = req.body;

    const newTask: ITask = new Task({ description });
    await newTask.save();

    res.status(201).json({ task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Instability on the server!" });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { description, completed } = req.body;

    const updatedTask: ITask | null = await Task.findByIdAndUpdate(
      id,
      { description, completed },
      { new: true } // Retorna o documento atualizado
    );

    if (!updatedTask) {
      res.status(404).json({ message: 'Task not found!' });
      return;
    }

    res.status(200).json({ task: updatedTask });
  } catch(error) {
    res.status(500).json({message: "Instability on the server!" });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Verifica se o ID é válido
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: 'Invalid ID' });
      return;
    }

    const deletedTask: ITask | null = await Task.findByIdAndDelete(
      id,
      { new: true });

    if (!deletedTask) {
      res.status(404).json({ message: 'Task not found!' });
      return;
    }

    res.status(200).json({ message: 'The task was deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: "Instability on the server!" });
  }
};